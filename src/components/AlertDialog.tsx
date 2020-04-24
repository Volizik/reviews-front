import React, {FC, ReactNode, useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export interface AlertDialogProps {
    title: string;
    text: string;
    buttonComponent: (setIsOpen: (isOpen: boolean) => void) => ReactNode;
    onAgree: () => void;
    onDisagree?: () => void;
}

export const AlertDialog: FC<AlertDialogProps> = ({
    title,
    text,
    buttonComponent,
    onAgree,
    onDisagree= () => {}
}) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleClose = () => {
        setOpen(false);
    };

    const onAgreeHandler = () => {
        handleClose();
        onAgree();
    }

    const onDisagreeHandler = () => {
        handleClose();
        onDisagree();
    }

    return (
        <div>
            {buttonComponent(setOpen)}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{text}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onAgreeHandler} color="primary">Да</Button>
                    <Button onClick={onDisagreeHandler} color="primary" autoFocus>Нет</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}