import { cn } from '@/lib/utils';
import * as React from 'react';
import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface IInputFieldProps<T extends FieldValues> {
    id: string;
    type?: string;
    disabled?: boolean;
    placeholder: string;
    errors: FieldErrors;
    register: UseFormRegister<T>
};

const InputField = <T extends FieldValues>({
    id,
    type,
    disabled,
    placeholder,
    errors,
    register
}: IInputFieldProps<T>) => {

    const message = errors[id] && errors[id]?.message as string;

    return (
        <div>
            <input 
                autoComplete='off'
                id={id}
                disabled={disabled}
                placeholder={placeholder}
                type={type}
                className={cn('w-full p-3 my-2 outline-none rounded-md disabled:opacity-70 disabled:cursor-not-allowed border border-slate-300', errors[id] && 'border-rose-400')}
                {...register(id as Path<T>)}
            />
            {message && <span className='text-sm text-rose-400'>{message}</span>}
        </div>
    )
};

export default InputField;