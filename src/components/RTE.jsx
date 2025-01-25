import React, { useState,useId,forwardRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';
 function RTE({
    name,
    Control,
    label,
    defaultValue='',
},ref) {
    const id = useId();
    return (
        <div className='w-full'>
            {label && <label className="inline-block mb-1 pl-1" htmlFor={id}>{label}</label>}

            <Controller 
            id = {id}
        name={name}
        control={Control}
        render={({field:{onChange}})=>(
            <Editor

            apiKey='jrse8327p0gtd3h9qevez116jeb0ahsm6fek06yi0ucttcot'
            initialValue={defaultValue}
            init={{
                selector: '#editor',
                initialValue: defaultValue,
                height: 500,
                menubar: true,
                plugins: [
                    "image",
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "help",
                    "wordcount",
                    "anchor",
                ],
                toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
    
            onEditorChange={onChange}
             />
        )}
        />
        </div>
    )
}

export default forwardRef(RTE)