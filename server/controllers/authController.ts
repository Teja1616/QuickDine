import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import {User} from "../models/User.js";
import bcrypt from "bcrypt";
import { AuthRequest } from "../middlewares/auth.js";


// Helper to generate JWT token
const generateToken = (id: string) => {
    return jwt.sign({id}, process.env.JWT_SECRET as string, {expiresIn: "30d"})
}

// Register a new user
// POST /api/auth/register
export const registerUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const {name, email, password, phone, role} = req.body;

        if(!name || !email || !password) {
            res.status(400).json({message: "Please enter all required fields"});
            return;
        }

        // Check if user exists
        const userExists = await User.findOne({email})
        if (userExists) {
            res.status(400).json({message: "User already exists"})
            return;
        }

        //Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //Create user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            phone,
            role,
        })

        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                role: user.role,
                token: generateToken(user._id.toString())
            })
        }else{
            res.status(400).json({message: "Invalid user data"});
        }
    }catch (error:any) {
        console.error(error);
        res.status(400).json({message: error.message});
    }
}

// Authenticate a user & get token
// POST /api/auth/login
export const loginUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const {email, password} = req.body;

        if(!email || !password) {
            res.status(400).json({message: "Please provide email and password"});
            return;
        }

        // Check for user
        const user = await User.findOne({email});
        if (!user){
            res.status(401).json({message: "Invalid email or password"});
            return;
        }
       
        // Check if password matches(user.password is not undefined because we queried it)
        const isMatch = await bcrypt.compare(password, user.password || "")
        if(!isMatch){
            res.status(401).json({message: "Invalid email or password"});
            return;
        }

         res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            role: user.role,
            token: generateToken(user._id.toString())
            })


    }catch (error:any) {
        console.error(error);
        res.status(400).json({message: error.message});
    }
}

// Get user profile
// GET /api/auth/me
// @access Private
export const getMe = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        if (!req.user) {
            res.status(401).json({message: "Not authorized"});
            return;
        }

        res.json(req.user);
    }catch (error:any) {
        console.error(error);
        res.status(400).json({message: error.message});
    }
}