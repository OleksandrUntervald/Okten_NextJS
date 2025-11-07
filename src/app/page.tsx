import Form from "next/form";
import {saveCars} from "@/server-actions/serverActions";

export default async function CreateCar() {

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-white text-black">
         <Form action={saveCars}>
             <input type="text" placeholder={'brand'} name={'brand'} className='border-2'/>
             <input type="number" placeholder={'price'} name={'price'} className='border-2'/>
             <input type="number" placeholder={'year'}  name={'year'}  className='border-2'/>
             <button className='border-2'>send</button>
         </Form>
        </div>
    );
}
