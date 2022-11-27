var UserProfile = (function () {
  var email = "";

  var getEmail = function () {
    return email; // Or pull this from cookie/localStorage
  };

  var setEmail = function (arg) {
    email = arg;
    // Also set this in cookie/localStorage
  };

  var removeEmail = function () {
    email = "";
  };

  return {
    getEmail: getEmail,
    setEmail: setEmail,
    removeEmail: removeEmail,
  };
})();

export default UserProfile;
