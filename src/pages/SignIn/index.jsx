import GoogleButton from 'react-google-button';

import { UserAuth } from 'components/Context/AuthContext';
import css from './SignIn.module.css';

const SignIn = () => {
  const { googleSignIn } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <section>
        <div className={css.container}>
          <GoogleButton
            className={css.googleButton}
            onClick={handleGoogleSignIn}
          />
          <h1>Sign in to see your profile 🥸</h1>
        </div>
      </section>
    </main>
  );
};

export default SignIn;
