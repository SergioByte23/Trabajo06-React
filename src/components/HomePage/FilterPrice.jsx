import { useForm } from "react-hook-form"

const FilterPrice = ({setPriceRange}) => {
    const {register,handleSubmit,reset} =useForm()
    const submit=data=>{
        const from=+data.from
        const to=+data.to
        setPriceRange({
            from,
            to: to===0? Infinity :to
        });
        reset({
            from:'',
            to:''
        })
    }

    return (
        <form className="Homepage__filterprice" onSubmit={handleSubmit(submit)}>
            <label className="Homepage__filterprice__label">
                <span className="Homepage__filterprice__span">From</span>
                <input className="Homepage__filterprice__input" {...register('from')} type='number'></input>
            </label>
            <label className="Homepage__filterprice__label">
                <span className="Homepage__filterprice__span Homepage__span-to">To</span>
                <input className="Homepage__filterprice__input" {...register('to')} type='number'></input>
            </label>
            <button className="Homepage__btn__filter">Filter price</button>



        </form>
    )
}

export default FilterPrice