import { UserAuth } from './context/AuthContext';
import NonUserRoutes from './routes/NonUserRoutes';
import UserRoutes from './routes/UserRoutes';

function App() {
  const { isLoggedOut } = UserAuth();
  return (
    <div>
      <p className='text-red-100'>Testing 2</p>
      {
        isLoggedOut ? (<NonUserRoutes/>) : (<UserRoutes/>)
      }
    </div>
  );
}

export default App;
