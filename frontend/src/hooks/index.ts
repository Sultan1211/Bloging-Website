import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

interface Blogs {
    id: string;
    title: string;
    content: string;
    author: {
        name: string;
    };
}
 export interface Blog {
    id: string;
    title: string;
    content: string;
    author: {
        name: string;
    };
}
export const useBlog = ({id}:{id : string})=>{
    const [blog,setBlog] = useState<Blog>();
    const [loading, setLoading] = useState(true);

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("No token found");
            setError("No token found");
            setLoading(false);
            return;
        }

        setLoading(true);
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            
        })
        .then(response => {
            setBlog(response.data.blog);
            setLoading(false);
        })
        .catch(error => {
            console.error("Error fetching blogs:", error);
            setError(error.message);
            setLoading(false);
        });
    }, [id]);
    return {
        loading,
        blog,
        error,
    };

}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blogs[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("No token found");
            setError("No token found");
            setLoading(false);
            return;
        }

        setLoading(true);
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            
        })
        .then(response => {
            setBlogs(response.data.blogs);
            setLoading(false);
        })
        .catch(error => {
            console.error("Error fetching blogs:", error);
            setError(error.message);
            setLoading(false);
        });
    }, []);

    return {
        loading,
        blogs,
        error,
    };
};
