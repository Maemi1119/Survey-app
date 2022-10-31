import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function List({questionaires,questions,methods,choices,auth,errors}){
    
    return(
        <>
        {questionaires.map(list =>{
            return(
                <div className='list'>
                    <Stack direction="row" spacing={3}>
                        <p>{list.name}</p>
                        <p>{list.category_id}</p>
                        <p>{list.users_id}</p>
                        <p>{list.created_at}</p>
                        <p>{list.updated_at}</p>
                        <Button variant="outlined" href={'/share/'+list.id}>共有</Button>
                        <Button variant="contained"
                            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            href={'/list/'+list.id}
                        >開く</Button>
                    </Stack>
                </div>
            );
        })}
        </>
        );
}