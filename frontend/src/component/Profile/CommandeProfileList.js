import React, { useEffect, useState } from 'react';
import ArticleService from '../../services/article.service';
import AuthService from '../../services/auth.service';
import Command from './Command';

export default function CommandeProfileList() {
    const [commands, setCommands] = useState([])
    const user = AuthService.getUser();

    useEffect(() => {
        async function fetchData() {
            const response = await ArticleService.getCommand(user.id);
            setCommands(response);
        }
        fetchData();
    }, [user.id])

    return (
        <>
            {
                commands.map((command, index) => {
                    return (
                        <Command data={command} key={index} />
                    )
                })
            }
        </>
    )
}
