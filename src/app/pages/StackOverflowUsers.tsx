import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { getSOUsers, usersSelector } from '../../features/stackoverflow/StackoverflowSlice';
import UserList from '../components/UserList';
import LoadingSpinner from '../components/loading-spinner/LoadingSinner';
import ErrorPage from '../components/ErrorPage';

export default function StackOverflowUsers() {
    
    const dispatch = useAppDispatch();
    const { users, loading, errors } = useAppSelector(usersSelector);
    
    useEffect(() => {
        dispatch(getSOUsers());
    },[dispatch])

    if (loading) {
        return <LoadingSpinner />
    }

    if (errors) {
        return <ErrorPage errorCode={500} />
    }

  return (
    <>
        <div id="title-text" className="display-4 my-3 mb-3 text-center">Stackoverflow Users: Top 20</div>
        <hr />
        <UserList users={users} />
    </>
  )
}
