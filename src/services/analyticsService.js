// analyticsService.js
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase/FirebaseConfig'; // Assuming db is your firestore instance
const chartOptions = {
    scales: {
      y: {
        type: 'linear', // Ensure the correct scale type
        beginAtZero: true,
      },
    },
  };
  
export const fetchAnalyticsData = async () => {
  try {
    const analyticsCollection = collection(db, 'analytics'); // Using db as Firestore instance
    const snapshot = await getDocs(analyticsCollection);
    return snapshot.docs.map(doc => doc.data());
  } catch (error) {
    console.error('Error fetching analytics data:', error.message);
    throw new Error('Error fetching analytics data');
  }
};
