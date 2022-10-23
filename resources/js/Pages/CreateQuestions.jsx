import React, { useState,useCallback } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import Create from '@/Components/Create';
import Title from '@/Components/Title';
import Button from '@mui/material/Button';

export default function CreateQuestions({ questionaires, methods, auth}) {
    
    const [questions, setQuestions] = useState([]);
    const addQuestions = useCallback(() => {
        setQuestions((prevQuestions) => ([ ...prevQuestions, "" ]));
    });
    
    return(
        <>
        {/*<AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">creatform</h2>}
        >*/}
        
            <div>
              <Title title='アンケート名'/>
              <h8>{ questionaires.name }</h8>
            </div>
            
            <Create questionaires={questionaires} methods={methods} addQuestions={addQuestions} />
            {questions.map((question,index) => {
                return(
                    <Create questionaires={questionaires} methods={methods} addQuestions={addQuestions}/>
                );
            })}
            <Button component="button" variant="contained" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    >設定の確認</Button>
    
        {/*</AuthenticatedLayout>*/}
        </>
    );
}