import FormPage from "@/features/ContactPage/FormPage";
import { Poppins } from 'next/font/google'


const poppinsFont = Poppins({
  weight: ['100', '300',  '500', '700'],
  subsets: ['latin'],
})

export default function ContactUsPage() {
  

  return (
    <main className={`mt-[70px] bg-neutral-1000 ${poppinsFont.className}`}>
       <FormPage/>
    </main>
  );
}
