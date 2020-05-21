import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store';
import { getAllWorkersThunk } from '../store/worker/thunks';
import { Worker } from '../interfaces/worker';
import { WorkersTable } from '../components/WorkersTable';
import { WorkersSearchbar } from '../components/WorkersSearchbar';

export const Workers: FC = () => {
    const workers = useSelector<AppState, Worker[]>(
        (state) => state.worker.list,
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllWorkersThunk());
    }, [dispatch]);

    return (
        <>
            <WorkersSearchbar />
            <WorkersTable rows={workers} />
        </>
    );
};
