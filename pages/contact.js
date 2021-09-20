import React, { useRef, useState } from "react";
import Card from "../components/Card";
import Navigation from "../components/Navigation";
import * as Button from "../components/Button";
import Input from "../components/form/Input";
import TextArea from "../components/form/TextArea";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
    const recaptchaRef = useRef();
    const defaultForm = {
        name: "",
        email: "",
        message: "",
        captcha: "",
    };
    const [submitVal, setSumbitValue] = useState(defaultForm);
    const [messsage, setMessage] = useState({
        status: "",
        msg: "",
        show: false,
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const captchaVal = recaptchaRef.current.getValue();
        if (captchaVal) {
            try {
                setIsLoading(true);
                const response = await fetch(
                    "http://localhost:4000/api/contact/add",
                    {
                        method: "POST",
                        body: JSON.stringify({
                            ...submitVal,
                            captcha: captchaVal,
                        }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                if (response.status === 201) {
                    setMessage({
                        status: "success",
                        msg: "Berhasil mengirimkan pesan",
                        show: true,
                    });
                } else {
                    const error = await response.json();
                    setMessage({
                        status: "error",
                        msg: error?.message || "Something went wrong",
                        show: true,
                    });
                }
                setIsLoading(false);
                setSumbitValue(defaultForm);
            } catch (error) {
                setMessage({
                    status: "error",
                    msg: error?.message || "Something went wrong",
                    show: true,
                });
                setIsLoading(false);
            }
            recaptchaRef.current.reset();
        } else {
            setMessage({
                status: "error",
                msg: "Isi captcha terlebih dahulu",
                show: true,
            });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSumbitValue({ ...submitVal, [name]: value });
    };

    return (
        <div>
            <Navigation page="contact" />
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-5">
                <div className="lg:col-span-2 order-last md:order-first">
                    <Card>
                        <img
                            src="img/contact.png"
                            alt="About"
                            className="w-full mx-auto py-10"
                        />
                    </Card>
                </div>
                <div className="lg:col-span-3 md:col-span-2">
                    <h1 className="font-bold text-5xl text-purple-dark mb-7">
                        Contact
                    </h1>
                    <div className="mb-5">
                        <h2 className="font-bold text-xl text-purple-dark mb-2">
                            Location
                        </h2>
                        <p className="text-purple font-semibold">
                            Sona Topas Tower,
                            <br />
                            Jl. Jend. Sudirman No.Kav 26, RT.4/RW.2, Karet,
                            <br />
                            Jakarta Selatan, 12920.
                        </p>
                    </div>
                    <div className="mb-5">
                        <h2 className="font-bold text-xl text-purple-dark mb-2">
                            Email
                        </h2>
                        <p className="text-purple font-semibold">
                            info@62trade.com
                        </p>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            {messsage.show && (
                                <div
                                    className={`py-2 px-4 ${
                                        messsage.status === "success"
                                            ? "bg-green-500"
                                            : "bg-red-500"
                                    } rounded-lg flex justify-between mb-2 text-white w-full`}
                                >
                                    {messsage.msg}
                                    <button
                                        onClick={() => {
                                            setMessage({
                                                ...messsage,
                                                show: false,
                                            });
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            )}
                            <div className="mb-5">
                                <Input
                                    name="name"
                                    placeholder="Full Name"
                                    required={true}
                                    handleChange={handleInputChange}
                                    value={submitVal.name}
                                />
                            </div>
                            <div className="mb-5">
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="Email Address"
                                    required={true}
                                    handleChange={handleInputChange}
                                    value={submitVal.email}
                                />
                            </div>
                            <div className="mb-2">
                                <TextArea
                                    name="message"
                                    rows={4}
                                    required={true}
                                    placeholder="Your message here"
                                    handleChange={handleInputChange}
                                    value={submitVal.message}
                                />
                            </div>
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={
                                    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
                                }
                            />
                            <Button.Primary
                                type="submit"
                                className="mt-4"
                                disabled={isLoading}
                            >
                                {isLoading ? "Loading..." : "Send Message"}
                            </Button.Primary>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
