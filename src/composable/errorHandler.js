let errorHandler = (code) => {
    let messages = {
        'auth/email-already-in-use': 'This email is already in use.',
        'auth/invalid-email': 'Invalid email address.',
        'auth/invalid-credential': 'Incorrect email or password. Please try again.',
        'auth/weak-password': 'Password should be at least 6 characters.',
        'auth/user-not-found': 'No user found with this email.',
        'auth/wrong-password': 'Incorrect password.',
        'auth/too-many-requests': 'Too many attempts. Try again later.',
    }

    return messages[code] || 'Something went wrong. Please try again.'
}
export default errorHandler;