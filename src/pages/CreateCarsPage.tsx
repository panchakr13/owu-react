import {useForm} from "react-hook-form";
import {ICar} from "../models/ICar.ts";
import {addCar} from "../services/api.service.ts";
import {carValidator} from "../validators/carValidator.ts";
import {joiResolver} from "@hookform/resolvers/joi";


const CreateCarsPage = () => {

    const {register, handleSubmit, formState:{errors}} = useForm<ICar>
    ({mode:'all', resolver: joiResolver(carValidator)});

    const createHandler = (data:ICar) => {
        addCar(data);
        console.log(data)

    }

    let myForm;

    return (
        <>
            <form onSubmit={handleSubmit(createHandler)} ref={(e) => myForm = e}>

                <div>
                    <input type="text" {...register('brand')}/>
                    <div>{errors.brand?.message}</div>
                </div>

                <div>
                    <input type="number" {...register('year')}/>
                    <div>{errors.year?.message}</div>
                </div>

                <div>
                    <input type="number" {...register('price')}/>
                    <div>{errors.price?.message}</div>
                </div>

                <button onClick={() =>{
                    myForm.reset()
                }}>Add Car</button>

            </form>
        </>
    );
};

export default CreateCarsPage;