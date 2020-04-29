import React, { ChangeEvent, FC, useRef, useState } from 'react';
import { useFormik } from 'formik';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

export interface ReviewFormDTO {
    firstName: string;
    lastName: string;
    fatherName: string;
    country: string;
    city: string;
    position: string;
    workingPlace: string;
    text: string;
}

export interface ReviewFormProps extends Partial<ReviewFormDTO> {
    onSubmit: (values: ReviewFormDTO, file: File | null) => void;
}

export const ReviewForm: FC<ReviewFormProps> = ({
    fatherName = '',
    firstName = '',
    lastName = '',
    text = '',
    workingPlace = '',
    position = '',
    city = '',
    country = '',
    onSubmit,
}) => {
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState<File | null>(null);
    const formik = useFormik<ReviewFormDTO>({
        initialValues: {
            firstName,
            lastName,
            fatherName,
            city,
            country,
            position,
            workingPlace,
            text,
        },
        onSubmit: (values) => onSubmit(values, file),
    });

    const onInputFileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.persist();
        if (inputFileRef.current && inputFileRef.current.files) {
            setFile(inputFileRef.current.files[0]);
        }
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id='lastName'
                        name='lastName'
                        label='Фамилия'
                        fullWidth
                        autoComplete='lastname'
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id='firstName'
                        name='firstName'
                        label='Имя'
                        fullWidth
                        autoComplete='firstname'
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id='fatherName'
                        name='fatherName'
                        label='Отчество'
                        fullWidth
                        autoComplete='fathertname'
                        onChange={formik.handleChange}
                        value={formik.values.fatherName}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id='country'
                        name='country'
                        label='Страна проживания'
                        fullWidth
                        onChange={formik.handleChange}
                        value={formik.values.country}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id='city'
                        name='city'
                        label='Город проживания'
                        fullWidth
                        onChange={formik.handleChange}
                        value={formik.values.city}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name='workingPlace'
                        label='Место работы'
                        fullWidth
                        required
                        onChange={formik.handleChange}
                        value={formik.values.workingPlace}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id='position'
                        name='position'
                        label='Должность'
                        fullWidth
                        required
                        onChange={formik.handleChange}
                        value={formik.values.position}
                    />
                </Grid>
                <Grid item xs={10}>
                    <TextField
                        id='review_text'
                        label='Отзыв о сотруднике'
                        name='text'
                        multiline
                        fullWidth
                        required
                        onChange={formik.handleChange}
                        value={formik.values.text}
                    />
                </Grid>
                <Grid item xs={2}>
                    <input
                        ref={inputFileRef}
                        accept='image/*'
                        style={{ display: 'none' }}
                        id='icon-button-file'
                        name='photo'
                        type='file'
                        onChange={onInputFileChangeHandler}
                    />
                    <label htmlFor='icon-button-file'>
                        <IconButton
                            color='primary'
                            aria-label='upload picture'
                            component='span'>
                            <PhotoCamera />
                        </IconButton>
                    </label>
                    <strong>{file ? file.name : 'Фото сотрудника'}</strong>
                </Grid>
            </Grid>
            <br />
            <br />
            <Button
                variant='contained'
                color='primary'
                disableElevation
                type='submit'
                fullWidth>
                Сохранить
            </Button>
        </form>
    );
};
