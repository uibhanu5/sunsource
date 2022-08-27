export abstract class CommonMessages {
  public static readonly TOKEN_EXPIRED = 'Session Expired. Please Login';
  public static readonly INVALID_TOKEN =
    'Getting Invalid Token. Please try again later';
  public static readonly LOGIN_SUCESS = 'login Success';
  public static readonly INVALID_USER = 'Invalid User';

  public static readonly SIGNUP_SUCESS = 'Signup Success';
}

export abstract class AppTokens {
  public static readonly ACCESS_TOKEN = 'accessToken';
  public static readonly REFRESH_TOKEN = 'refreshToken';
  public static readonly ADMIN_ACCESS_TOKEN = 'adminAccessToken';
  public static readonly ADMIN_REFRESH_TOKEN = 'adminRefreshToken';
  public static readonly ROLE_DISPLAY_TEXT = 'roleDisplayText';
  public static readonly IS_SWITCH_ROLE = 'isSwitchRole';
  public static readonly IS_INVOICE_VERIFIED = 'isInvoiceVerified';
  public static readonly IS_SWITCH_USER_OPTION = 'isSwitchUserOption';
  public static readonly SELECTED_INVOICE_CODE = 'selectedInvoiceCode';
  public static readonly INVOICE_COUNT = 'invoiceCount';
}
