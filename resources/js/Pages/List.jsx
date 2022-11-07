import React from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Header from '@/Components/Header';
import {Inertia} from "@inertiajs/inertia";

export default function List({questionaires,questions,answers,auth,errors}){
    
    const deleteSurvey = (id) =>{
        if(confirm('削除すると復元できません。本当に削除しますか？')){
            Inertia.delete(`/delete/${id}`);
        }
    };
    
    return(
        <>
            <Header>アンケート一覧</Header>
            <h4 className="font-bold text-2xl mt-4">あなたが作成したアンケート</h4>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>アンケート名</TableCell>
                    <TableCell align="right">カテゴリー</TableCell>
                    <TableCell align="right">質問数</TableCell>
                    <TableCell align="right">作成時刻</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {questionaires.map((row) => (
                      <>
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.category_id}</TableCell>
                          <TableCell align="right">{row.questions}</TableCell>
                          <TableCell align="right">{row.created_at}</TableCell>
                        </TableRow>
                        <Button variant="outlined" href={'/share/'+row.id}>共有</Button>
                        <Button variant="contained"
                            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            href={'/list/'+row.id}
                        >開く</Button>
                        <Button variant="outlined" onClick={()=>deleteSurvey(row.id)}>削除</Button>
                      </>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
        </>
        );
}