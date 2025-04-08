'use client'
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";
import Image from "next/image";
const Footer = () => {
    return (
        <footer className="bg-white text-gray-700 py-8">
            <div className="container mx-auto px-4">

                {/* Company Info */}
                <div className="text-left mb-8">
                    <h1 className="text-3xl font-bold">

                        <Image src="/solvehireai_logo_black.png" alt="Logo" width={120} height={40} />
                    </h1>
                    <p className="mt-2">
                        We ensure you connect with the right talent faster, more efficiently,
                        and with greater success than ever before.
                    </p>
                </div>

                {/* Grid Links */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
                    {/* Company Links */}
                    <div>
                        <h3 className="font-semibold mb-2">Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link href="https://calendly.com/ashish-intello">
                                    <span className="hover:underline cursor-pointer">
                                        Request A Demo
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#why-solvehire">
                                    <span className="hover:underline cursor-pointer">
                                        Why SolveHire
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <span className="hover:underline cursor-pointer">
                                        Contact
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Pages */}
                    <div>
                        <h3 className="font-semibold mb-2">Pages</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link href="#Comparison">
                                    <span className="hover:underline cursor-pointer">
                                        Comparison
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#F&Q">
                                    <span className="hover:underline cursor-pointer">
                                        F&Q
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://app.solvehire.ai">
                                    <span className="hover:underline cursor-pointer">
                                        Sign Up
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Other Links */}
                    <div>
                        <h3 className="font-semibold mb-2">Other</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link href="/terms">
                                    <span className="hover:underline cursor-pointer">
                                        Terms Of Services
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy">
                                    <span className="hover:underline cursor-pointer">
                                        Privacy Policy
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t pt-4">
                    <div className="flex flex-col md:flex-row justify-between text-sm">
                        <span>contact@solvehire.ai</span>
                        <span>Getting started</span>
                    </div>

                    {/* Social Icon - Professional Right-Aligned */}
                    <div className="flex justify-end mt-4">
                        <Link
                            href="https://www.linkedin.com/company/solvehire"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-700 transition-colors duration-300 text-2xl"
                            aria-label="SolveHire LinkedIn"
                        >
                            <i className="bi bi-linkedin"></i>
                        </Link>
                    </div>

                    <p className="text-center text-gray-500 mt-2">
                        © 2025-2026 solvehire ai. All Rights Are Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;