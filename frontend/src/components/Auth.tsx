import React, { ChangeEvent, EventHandler, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Signup from '../pages/Signup'
import { signinInput, signupInput } from '@syedsultan/commonzod';
import axios from 'axios';
import { BACKEND_URL } from '../config';


function Auth({ type }: { type: "signup" | "signin" }) {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState<signupInput>({
        name: "",
        email: "",
        password: ""
    });
   
    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type}`, inputs);
            const { jwt } = response.data; // Assuming response contains the JWT
            localStorage.setItem("token", jwt);
            navigate("/blogs");
        } catch (e:any) {
            console.error("Error in sign-up/sign-in:", e);
            alert(e.response?.data?.msg || "An unexpected error occurred");
        }
    }
    return (
        <div>
            <div className='h-screen flex justify-center items-center'>
                <div className=''>
                    <div className='px-10'>

                        <div className='text-3xl font-extrabold '>
                            Create an Account
                        </div>
                        <div className='text-center text-slate-500'>
                            {type === "signup" ? "Already have an acc?" : "Don't have an account?"}
                            <Link className='pl-2 underline hover:text-blue-500' to={type === "signup" ? "/signin" : "/signup"}>{type === "signup" ? "Login" : "SignUp"}</Link>
                        </div>
                    </div>
                    {type === "signup" ? <div>
                        <InputFields label="Name" placeholder='Andrew Tate' onChange={(e) => {
                            setInputs(c => ({
                                ...c,
                                name: e.target.value
                            }))
                        }} />
                    </div> : null}
                    <div>
                        <InputFields label="UserName" placeholder='AndrewT@gmail.com' onChange={(e) => {
                            setInputs(c => ({
                                ...c,
                                email: e.target.value
                            }))
                        }} />
                    </div>
                    <div>
                        <InputFields label="Password" type="password" placeholder='123$%^*' onChange={(e) => {
                            setInputs(c => ({
                                ...c,
                                password: e.target.value
                            }))
                        }} />
                    </div>
                    <div className='pt-5'>
                        <button onClick={sendRequest} type="button" className="text-white w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{type === "signup" ? "Sign Up" : "Sign In"}</button>

                    </div>

                </div>
            </div>
        </div>
    )
}
interface inputInterface {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}
const InputFields = ({ label, placeholder, onChange, type }: inputInterface) => {
    return (
        <div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 pt-4">{label}</label>
                <input type={type || "text"} id="first_name" onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
            </div>
        </div>
    )

}

export default Auth