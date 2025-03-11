import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const response = await fetch("https://formspree.io/f/xdkaqqnv", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert("Message sent successfully!");
                reset();
            } else {
                alert("Something went wrong. Please try again later.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto px-4" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl font-bold text-secondary-900">Get In Touch</h2>
                <p className="text-secondary-600 mt-4">Reach out via the form below.</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto"
            >
                <h3 className="text-2xl font-bold text-secondary-900 mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <input
                        type="text"
                        {...register("name", { required: "Name is required" })}
                        placeholder="Your Name"
                        className="w-full p-3 border rounded-lg"
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}

                    <input
                        type="email"
                        {...register("email", { required: "Email is required" })}
                        placeholder="Your Email"
                        className="w-full p-3 border rounded-lg"
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                    <input
                        type="text"
                        {...register("subject", { required: "Subject is required" })}
                        placeholder="Subject"
                        className="w-full p-3 border rounded-lg"
                    />
                    {errors.subject && <p className="text-red-500">{errors.subject.message}</p>}

                    <textarea
                        {...register("message", { required: "Message is required" })}
                        placeholder="Your Message"
                        className="w-full p-3 border rounded-lg"
                    />
                    {errors.message && <p className="text-red-500">{errors.message.message}</p>}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary-600 text-white p-3 rounded-lg hover:bg-primary-700 transition"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default Contact;
