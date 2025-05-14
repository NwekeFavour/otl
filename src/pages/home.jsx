import React from 'react';
import { Button } from "@/components/ui/button"
import Brand from "../assets/img/brand.svg"
import Twitter from "../assets/img/logo-twitter.svg"
import Instagram from "../assets/img/Instagram 2.svg"
import Facebook from "../assets/img/Shape.svg"
import { Link } from 'react-router-dom';
import {Input} from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import ArrowRight from "../assets/img/arrow-right.svg"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"  
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ShoppingBag, ShoppingCart } from 'lucide-react';
import Footer from '../components/footer';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({message: 'invalid email address'}),
  phonenumber: z.string().regex(/^\+?[0-9]\d{1,14}$/,'Invalid phone number format'),
  message: z.string().min(2).max(10)
})
function Home(props) {
    const Contact = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        email: "",
        phonenumber: "",
        message: ""
      },
    })
     
      // 2. Define a submit handler.
      function onSubmit(values) {
        console.log("submitted!", values);
        Contact.reset()
      }
    return (
        <div>
            <div className='xl:px-22 lg:px-30 md:px-20 sm:px-22 px-6 md:pt-6 md:pb-10 py-8'>
                <div className='flex items-center justify-between'>
                    <div>
                        <img className='xl:w-[130px] lg:w-[120px] md:w-[100px] sm:w-[80px] w-[60px]' src={Brand} alt="" />
                    </div>
                    <div className='flex items-center  md:gap-4'>
                        <div>
                            <Link to={"/shop"}>
                                <ShoppingBag className='w-[50px]'/>
                            </Link>
                        </div>
                        <Button className="bg-[#F48F23] rounded-4xl text-[#FFFFFF]">Contact Us</Button>
                    </div>
                </div>
                <div className='sm:flex items-end gap-7 justify-between'>
                    <div>
                        <p className="m-0 xl:mb-3 sm:mb-3 text-[14px] text-[#57432E] font-semibold md:text-[15px] sm:text-[14px] lg:text-[20px]">Get Started</p>
                        <div>
                            <p className='text-[#57432E] sm:text-[28px] sm:leading-[100%] font-bold md:leading-[100%] lg:leading-[100%] text-[24px] xl:text-[70px] lg:text-[40px] md:text-[35px]'>Get in touch with us. We're here to assist you.</p>
                        </div>
                    </div>
                    <div className='sm:block sm:mt-0 mt-3 flex items-center'>
                        <div className=''>
                            <Link>
                                
                            </Link>
                        </div>
                        <div className='sm:my-2 my-1 md:my-3'>
                            <Link>
                                <img className='w-[24px] sm:w-[30px] h-[17.89px]' src={Instagram} alt="instagram-logo" />
                            </Link>
                        </div>
                        <div className=''>
                            <Link>
                                <img className='w-[24px] sm:w-[30px] h-[17.89px]' src={Twitter} alt="twitter-logo" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='sm:mt-5 mt-4 md:mt-7 lg:mt-16'>
                    <Form {...Contact}>
                        <form onSubmit={Contact.handleSubmit(onSubmit)} className="space-y-8">
                            <div className=' xl:flex  items-center justify-between gap-3'>
                                <FormField
                                control={Contact.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormControl>
                                        <Input className="file:text-foreground placeholder:text-[#57432E] selection:bg-primary selection:text-primary-foreground dark:bg-input/30  flex h-9 xl:w-[fitcontent] w-full min-w-0 rounded-none  bg-transparent px-3 py-6 lg:placeholder:text-lg text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 text-[#57432E] file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 opacity-100 md:text-sm  focus-visible:ring-0   border-x-0 border-t-0 focus:outline-none focus:ring-transparent  border-b-[1px] focus:ring-0 shadow-none " placeholder="Your Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                                <FormField
                                control={Contact.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormControl>
                                        <Input className="file:text-foreground placeholder:text-[#57432E] selection:bg-primary selection:text-primary-foreground dark:bg-input/30  flex h-9 xl:w-[450px]  min-w-0 rounded-none  bg-transparent px-3 py-6 lg:placeholder:text-lg text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 text-[#57432E] file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm  focus-visible:ring-0   border-x-0 border-t-0  focus:outline-none focus:ring-transparent  border-b-[1px] focus:ring-0 shadow-none " placeholder="Email Address" type="email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                                <FormField
                                control={Contact.control}
                                name="phonenumber"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormControl>
                                        <Input className="file:text-foreground placeholder:text-[#57432E] selection:bg-primary selection:text-primary-foreground dark:bg-input/30  flex h-9 xl:w-[450px] min-w-0 rounded-none  bg-transparent px-3 py-6 lg:placeholder:text-lg text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 text-[#57432E] file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm  focus-visible:ring-0  border-x-0 border-t-0 focus:outline-none focus:ring-transparent  border-b-[1px] focus:ring-0 shadow-none " placeholder="Phone Number(optional)" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                            </div>
                            <div className='space-y-7'>
                                <FormField
                                control={Contact.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormControl>
                                        <Input className="file:text-foreground placeholder:text-[#57432E] selection:bg-primary selection:text-primary-foreground dark:bg-input/30  flex h-9 xl:w-[450px] min-w-0 rounded-none  bg-transparent px-3 py-6 lg:placeholder:text-lg text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm  focus-visible:ring-0 text-[#57432E]  border-x-0 border-t-0 focus:outline-none focus:ring-transparent  border-b-[1px] focus:ring-0 shadow-none " placeholder="Message" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                            </div>
                            <Button className="rounded-pill flex items-center bg-[#F48F23] lg:px-8 lg:py-5" type="submit">
                                <div>
                                    Leave us a Message
                                </div>
                                <div>
                                    <img src={ArrowRight} alt="arrow-right-svg" /></div></Button>
                        </form>
                    </Form>
                </div>
            </div>
            <div className='contacts sm:flex text-center sm:py-0 py-2 items-center justify-around'>
                <div>
                    <p className="m-0 xl:mb-3 sm:mb-3 text-[14px] text-[#57432E] font-semibold md:text-[15px] sm:text-[14px] lg:text-[20px]">Contact info</p>
                    <div>
                        <p className="m-0 text-[#57432E] xl:leading-[130%] md:leading-[100%] font-bold md:text-[36px] sm:text-[26px] text-[20px] sm:leading-[100%] xl:text-[45px]">We are always<br/> happy to assist you</p>
                    </div>
                </div>
                <div>
                    <p className="m-0 text-[14px] text-[#57432E] font-semibold md:text-[15px] sm:text-[14px] lg:text-[17px]">Email address</p>
                    __
                    <p className="m-0 text-[14px] text-[#57432E] font-medium md:text-[15px] sm:text-[14px] lg:text-[17px]">otl12@gmail.com</p>
                </div>
                <div>
                    <p className="m-0 text-[14px] text-[#57432E] font-semibold md:text-[15px] sm:text-[14px] lg:text-[17px]">Number</p>
                    __
                    <p className="m-0 text-[14px] text-[#57432E] font-medium md:text-[15px] sm:text-[14px] lg:text-[17px]">091083839002</p>
                </div>
            </div>     
            <Footer/>   
        </div>
    );
}

export default Home;