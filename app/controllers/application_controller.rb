class ApplicationController < ActionController::Base
    #CLLLE
    helper_method :current_user, :logged_in?

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def login!(user)
        session[:session_token] = user.reset_session_token! 
    end

    def logout! 
        current_user.reset_session_token!
        @current_user = nil
        session[session_token] = nil
    end
end
