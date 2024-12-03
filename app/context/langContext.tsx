"use client";
import { createContext, useContext, useState } from "react";
import {LangContextType} from "@/app/types/types"

const LangContext = createContext<LangContextType | undefined>(undefined);