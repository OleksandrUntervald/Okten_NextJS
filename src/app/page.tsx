import Form from "next/form";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-white text-black">
         <Form action='submit'>
             <input type="text" placeholder={'login'} name={'login'} className='border-2'/>
             <input type="text" placeholder={'password'} name={'password'} className='border-2'/>
             <button className='border-2'>submit</button>
         </Form>
        </div>
    );
}
