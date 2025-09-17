import React, { useRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_ya247mi',     // replace with your EmailJS service ID
            'template_cqk2z4d',    // replace with your EmailJS template ID
            form.current,
            'Hl2_JRaP5LYeHGBQx'      // replace with your EmailJS public key
        )
        .then(
            (result) => {
                alert('Message sent successfully!');
                form.current.reset(); // clear form
            },
            (error) => {
                alert('Oops, something went wrong. Please try again.');
            }
        );
    };

    return (
        <div className='bg-black text-white py-20' id='contact'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <div className='flex-1'>
                        <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
                        <p className='text-lg mb-8'>
                            I'm open to discussing web development projects or partnership opportunities.
                        </p>
                        <div className='mb-4 mt-8'>
                            <FaEnvelope className='inline-block text-green-400 mr-2' />
                            <a 
                                href="mailto:iharini3123@gmail.com?subject=Hello%20Harini&body=Hi%20Harini,%0A%0AI%20would%20like%20to%20connect%20with%20you." 
                                className='hover:underline'
                            >
                                iharini3123@gmail.com
                            </a>
                        </div>
                        <div className='mb-4'>
                            <FaPhone className='inline-block text-green-400 mr-2' />
                            <span>+91 96263 15930</span>
                        </div>
                        <div className='mb-4'>
                            <FaMapMarkedAlt className='inline-block text-green-400 mr-2' />
                            <span>Coimbatore, Tamilnadu, India</span>
                        </div>
                    </div>

                    {/* Right side form */}
                    <div className='flex-1 w-full'>
                        <form ref={form} onSubmit={sendEmail} className='space-y-4'>
                            <div>
                                <label htmlFor='name' className='block mb-2'>Your Name</label>
                                <input 
                                    type='text' 
                                    name='user_name'
                                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                                    placeholder='Enter Your Name'
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor='email' className='block mb-2'>Email</label>
                                <input 
                                    type='email' 
                                    name='user_email'
                                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                                    placeholder='Enter Your Email'
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor='message' className='block mb-2'>Message</label>
                                <textarea 
                                    name='message'
                                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                                    rows='5'
                                    placeholder='Enter Your Message'
                                    required
                                />
                            </div>
                            <button 
                                type='submit'
                                className="bg-gradient-to-r from-green-400 to-blue-500 px-8 py-2 rounded-full hover:scale-105 transition-transform duration-300"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
