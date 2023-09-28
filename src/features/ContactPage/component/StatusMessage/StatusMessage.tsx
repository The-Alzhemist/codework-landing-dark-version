import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormSpreeStatusInterface } from './interface';

const StatusMessage = ({ succeeded, submitting, errors }: FormSpreeStatusInterface) => {
  useEffect(() => {
    if (submitting && !succeeded) {
      toast.info("We're processing your message...", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.dismiss();
    }

    if (!submitting && succeeded) {
      toast.success("Message sent successfully!", {
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.dismiss();
    }
    if (errors) { 
      toast.error("There was an issue sending your message. Please retry", {
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

  }, [succeeded, submitting, errors]);

  return null
};

export default StatusMessage