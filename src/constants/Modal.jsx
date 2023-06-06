import React, { useContext, useState } from "react";
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
} from "@material-tailwind/react";
import { ProtectedRoute } from "../App";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";



export default function Modal({setEmail,setName,setPercentile,handleService}) {
    const Navigate = useNavigate()
    const { currentUser } = useContext(AuthContext);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () =>currentUser?  setOpen((cur) => !cur): Navigate("/login");
    currentUser

    return (
        <React.Fragment>
        
            <Button onClick={handleOpen}>Get Started</Button>
            <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full max-w-[24rem]">
                    <CardHeader
                        variant="gradient"
                        color="blue"
                        className="mb-4 grid h-28 place-items-center"
                    >
                        <Typography variant="h3" color="white">
                            CollegeCrux
                        </Typography>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4">
                        <Input label="Student Name" onChange={(e) => setName(e.target.value)} size="lg" />
                        <Input label="Email" onChange={(e) => setEmail(e.target.value)} size="lg" />
                        <Input label="Enter Your Percentile" onChange={(e) => setPercentile(e.target.value)} size="lg" />
                        <div className="-ml-2.5">
                            <Checkbox label="Remember Me" />
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button variant="gradient" onClick={handleService} fullWidth>
                            Submit
                        </Button>
                        {/* <Typography variant="small" className="mt-6 flex justify-center">
                            Don&apos;t have an account?
                            <Typography
                                as="a"
                                href="#signup"
                                variant="small"
                                color="blue"
                                className="ml-1 font-bold"
                                onClick={handleOpen}
                            >
                                Sign up
                            </Typography>
                        </Typography> */}
                    </CardFooter>
                </Card>
            </Dialog>
        </React.Fragment>
    );
}