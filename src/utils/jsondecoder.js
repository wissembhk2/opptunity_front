

function parseAuthJwt(token) {
    try {
        // Split the token into its three parts: header, payload, and signature
        const base64Url = token.split('.')[1]; // Get the payload part
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Convert Base64Url to Base64
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    } catch (e) {
        return null; // Return null or handle the error as appropriate
    }
}
export default parseAuthJwt