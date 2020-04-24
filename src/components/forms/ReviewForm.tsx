import React, {ChangeEvent, FC, useRef, useState} from 'react';
import { useFormik } from 'formik';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

export interface ReviewFormDTO {
    firstName: string;
    lastName: string;
    fatherName: string;
    livingCountry: string;
    livingCity: string;
    livingStreet: string;
    livingHouseNumber: string;
    workingCountry: string;
    workingCity: string;
    workingStreet: string;
    workingHouseNumber: string;
    workingPosition: string;
    workingPlace: string
    text: string;
}

export interface ReviewFormProps {
    firstName?: string;
    lastName?: string;
    fatherName?: string;
    livingCountry?: string;
    livingCity?: string;
    livingStreet?: string;
    livingHouseNumber?: string;
    workingCountry?: string;
    workingCity?: string;
    workingStreet?: string;
    workingHouseNumber?: string;
    workingPosition?: string;
    workingPlace?: string;
    text?: string;
    onSubmit: (values: ReviewFormDTO, file: File | null) => void;
}

export const ReviewForm: FC<ReviewFormProps> = ({
    fatherName= '',
    firstName= '',
    lastName= '',
    livingCity= '',
    livingCountry= '',
    livingHouseNumber= '',
    livingStreet= '',
    text= '',
    workingCity= '',
    workingCountry= '',
    workingHouseNumber= '',
    workingPlace= '',
    workingPosition= '',
    workingStreet= '',
    onSubmit,
}) => {
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState<File | null>(null);
    const formik = useFormik<ReviewFormDTO>({
        initialValues: {
            firstName,
            lastName,
            fatherName,
            livingCountry,
            livingCity,
            livingStreet,
            livingHouseNumber,
            workingCountry,
            workingCity,
            workingStreet,
            workingHouseNumber,
            workingPosition,
            workingPlace,
            text,
        },
        onSubmit: values => onSubmit(values, file),
    });

    const onInputFileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.persist();
        if (inputFileRef.current && inputFileRef.current.files) {
            setFile(inputFileRef.current.files[0]);
        }
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Фамилия"
                        fullWidth
                        autoComplete="lastname"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="Имя"
                        fullWidth
                        autoComplete="firstname"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="fatherName"
                        name="fatherName"
                        label="Отчество"
                        fullWidth
                        autoComplete="fathertname"
                        onChange={formik.handleChange}
                        value={formik.values.fatherName}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="living_country"
                        name="livingCountry"
                        label="Страна проживания"
                        fullWidth
                        onChange={formik.handleChange}
                        value={formik.values.livingCountry}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="living_city"
                        name="livingCity"
                        label="Город проживания"
                        fullWidth
                        onChange={formik.handleChange}
                        value={formik.values.livingCity}
                    />
                </Grid>
                <Grid item xs={9} sm={3}>
                    <TextField
                        id="living_street"
                        name="livingStreet"
                        label="Улица проживания"
                        fullWidth
                        onChange={formik.handleChange}
                        value={formik.values.livingStreet}
                    />
                </Grid>
                <Grid item xs={3} sm={1}>
                    <TextField
                        id="living_house_number"
                        name="livingHouseNumber"
                        label="Дом"
                        fullWidth
                        onChange={formik.handleChange}
                        value={formik.values.livingHouseNumber}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="working_country"
                        name="workingCountry"
                        label="Страна рабочего места"
                        fullWidth
                        onChange={formik.handleChange}
                        value={formik.values.workingCountry}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="working_city"
                        name="workingCity"
                        label="Город рабочего места"
                        fullWidth
                        onChange={formik.handleChange}
                        value={formik.values.workingCity}
                    />
                </Grid>
                <Grid item xs={9} sm={3}>
                    <TextField
                        id="working_street"
                        name="workingStreet"
                        label="Улица рабочего места"
                        fullWidth
                        onChange={formik.handleChange}
                        value={formik.values.workingStreet}
                    />
                </Grid>
                <Grid item xs={3} sm={1}>
                    <TextField
                        id="working_house_number"
                        name="workingHouseNumber"
                        label="Дом"
                        fullWidth
                        onChange={formik.handleChange}
                        value={formik.values.workingHouseNumber}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="workingPlace"
                        label="Место работы"
                        fullWidth
                        required
                        onChange={formik.handleChange}
                        value={formik.values.workingPlace}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="working_position"
                        name="workingPosition"
                        label="Должность"
                        fullWidth
                        required
                        onChange={formik.handleChange}
                        value={formik.values.workingPosition}
                    />
                </Grid>
                <Grid item xs={10}>
                    <TextField
                        id="review_text"
                        label="Отзыв о сотруднике"
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
                        accept="image/*"
                        style={{display: "none"}}
                        id="icon-button-file"
                        name='photo'
                        type="file"
                        onChange={onInputFileChangeHandler}
                    />
                    <label htmlFor="icon-button-file">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera />
                        </IconButton>
                    </label>
                    <strong>{file ? file.name : 'Фото сотрудника'}</strong>
                </Grid>
            </Grid>
            <br />
            <br />
            <Button variant="contained" color="primary" disableElevation type='submit' fullWidth >
                Сохранить
            </Button>
        </form>
    );
};
