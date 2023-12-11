// import { React } from 'react';

import { Button, Stack,  } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
const ButtonExample = () => {
	return (
		<div style={{display:"flex", justifyContent:"center"}}>
			<Stack spacing={2} direction="row" paddingY={2}>
				<Button variant="text" startIcon={<DeleteIcon />}>Text</Button>
				<Button variant="contained">Contained</Button>
				<Button variant="outlined" endIcon={<SendIcon />}>Outlined</Button>
			</Stack>
		</div>
	);
};

export default ButtonExample;
