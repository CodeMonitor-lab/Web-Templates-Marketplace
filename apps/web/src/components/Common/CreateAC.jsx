"use client";

import React, { useState } from "react";
import { Button } from "@/components/Common";
import {Modal} from "@/components/Utility";
import { ChevronRight } from "lucide-react";

const CreateACPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button size="sm" color="indigo" onClick={() => setIsOpen(true)}>
        Create A/C
        <ChevronRight className="ml-2 h-4 w-4" />
      </Button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="md">
        <h2 className="text-xl font-bold mb-4">Create Your Account</h2>
        <p className="text-gray-600 mb-6">
          Start your journey with FutureApp. Fill in your details below.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
            Create Account
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default CreateACPopup;