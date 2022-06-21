import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import {STYLE_MODAL} from 'config/variables'
import {useDispatch ,useSelector} from "react-redux";

export const ModalSuggestionFood = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const handleClose = () => { dispatch({type: 'OPEN_MODAL' , payload: false}) };

    return (
        <div>
            <Modal open={state.modal} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{timeout: 500,}}>
                <Fade in={state.modal}>
                    <Box sx={STYLE_MODAL}>
                        <h2>غذا چی درست کنم ؟</h2>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
