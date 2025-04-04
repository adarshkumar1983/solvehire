
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-white text-gray-700 py-8">
            <div className="container mx-auto px-4">
                <div className="text-left mb-8">
                    <h1 className="text-3xl font-bold">
                        solvehire <span className="">ai</span>
                    </h1>
                    <p className="mt-2">
                        We ensure you connect with the right talent faster, more efficiently, 
                        and with greater success than ever before.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="font-semibold mb-2">Company</h3>
                        <ul className="space-y-1">
                        <li>
                                <Link href="https://calendly.com/ashish-intello">
                                    <span className=" hover:underline cursor-pointer">
                                        Request A Demo
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#why-solvehire">
                                    <span className=" hover:underline cursor-pointer">
                                     Why SolveHire
                                    </span>
                                </Link>
                            </li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Pages</h3>
                        <ul className="space-y-1">
                            <li>
                        <Link href="#Comparison">
                                    <span className=" hover:underline cursor-pointer">
                                    Comparison
                                    </span>
                                </Link>
                                </li>
                                <li>
                                <Link href="#F&Q">
                                    <span className=" hover:underline cursor-pointer">
                                    F&Q
                                    </span>
                                </Link>
                                </li>
                                <li>
                                <Link href="https://app.solvehire.ai">
                                    <span className=" hover:underline cursor-pointer">
                                    Sign Up
                                    </span>
                                </Link>
                                </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Other</h3>
                        <ul className="space-y-1">
                            <li>
                            <Link href="/terms">
                                    <span className=" hover:underline cursor-pointer">
                                        Terms Of Services
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy">
                                    <span className=" hover:underline cursor-pointer">
                                        Privacy Policy
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t pt-4">
                    <div className="flex justify-between text-sm">
                        <span>contact@solvehire.ai</span>
                        <span>Getting started</span>
                    </div>
                    <p className="text-center text-gray-500 mt-2">
                        @2025-2026 solvehire ai. All Rights Are Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;