import express from 'express';
import { 
	showHomepage
} from '../controllers/mainController.js'

// Init Router
const router = express.Router();

// Get all Posts
router.get('/', showHomepage);


// Export with ES Modules (after adding "type": "module" to package.json file)
export default router;
