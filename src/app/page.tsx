import Form from "next/form";
import {getMeals, saveMeal} from "@/server-actions/serverActions";

export default async function Home() {
    let mealsArray = await getMeals();




    return (
        <div className="flex min-h-screen items-center justify-center bg-white text-black">
         <Form action={saveMeal}>
             <input type="text" name={'title'} className='border-2'/>
             <button className='border-2'>send</button>
         </Form>
            <div className={'meals'}>
                {mealsArray.map(meal => (<div key={meal.id}>
                    {meal.title}
                </div>))}
            </div>

        </div>
    );
}
