import React from 'react';

export default function Title({title,required,children}) {
    return(
        <h1 className="text-xl font-bold mt-6">
            {title}
            {required &&
                <span className="text-red-500 pl-4">※ この項目の入力は必須です</span>
            }
            {children}
        </h1>
    );
}
