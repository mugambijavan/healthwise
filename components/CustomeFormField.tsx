"use client"
import {Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    } from "@/components/ui/form"
    import { Input } from "@/components/ui/input"
import { Control } from "react-hook-form"
import { FormFieldType } from "./forms/PatientForm"
import { Label } from "./ui/label"
import React from "react"
import Image from "next/image"

    interface CustomProps {
        control: Control<any>,
        fieldType: FormFieldType,
        name:string,
        label?:string,
        placeholder?:string,
        iconSrc?:string,
        iconAlt?:string,
        disabled?:boolean,
        dateFormat?:string,
        showTimeSelect?:boolean,
        children?:React.ReactNode,
        renderSkeleton?: (field:any) => React.ReactNode,

    }

    const RenderField = ({field,props } :{field:any ; props: CustomProps})  =>{
        const {fieldType, iconSrc, iconAlt,  placeholder } = props;
        switch (fieldType) {
            case FormFieldType.INPUT: 
                return (
                    <div className="flex rounded-md border border-dark-500 bg-dark-500 ">
                        {iconSrc && (
                            <Image 
                                src={iconSrc} 
                                alt={iconAlt || 'Icon'} 
                                height={24}
                                width={24}
                                className='ml-2'
                            />
                        )}
                        <FormControl>
                            <Input 
                                {...field} 
                                placeholder={placeholder} 
                                className="w-full px-3 py-2 text-sm ring-offset-background ring-2 ring-dark-500 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </FormControl>
                    </div>
                )
                break;
        
            default:
                break;
        }
    }


const CustomeFormField = (props: CustomProps) => {
    const {control, fieldType, name, label}= props;
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex-1">
                    {fieldType !== FormFieldType.CHECKBOX && label &&(
                        <FormLabel>{label}</FormLabel>
                    )}

                    <RenderField
                        field={field}
                        props={props}
                    />
                    <FormMessage  className="shad-error"/>
                </FormItem>
                )}
                />
    )
}

export default CustomeFormField