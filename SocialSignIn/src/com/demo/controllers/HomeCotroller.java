package com.demo.controllers;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.social.connect.Connection;
import org.springframework.social.google.api.Google;
import org.springframework.social.google.api.plus.Person;
import org.springframework.social.google.connect.GoogleConnectionFactory;
import org.springframework.social.linkedin.api.LinkedIn;
import org.springframework.social.linkedin.api.LinkedInProfile;
import org.springframework.social.linkedin.connect.LinkedInConnectionFactory;
import org.springframework.social.oauth1.AuthorizedRequestToken;
import org.springframework.social.oauth1.OAuth1Operations;
import org.springframework.social.oauth1.OAuth1Parameters;
import org.springframework.social.oauth1.OAuthToken;
import org.springframework.social.oauth2.AccessGrant;
import org.springframework.social.oauth2.OAuth2Operations;
import org.springframework.social.oauth2.OAuth2Parameters;
import org.springframework.social.twitter.api.Twitter;
import org.springframework.social.twitter.api.TwitterProfile;
import org.springframework.social.twitter.connect.TwitterConnectionFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.demo.pojo.User;

@Controller
public class HomeCotroller {
	
	TwitterConnectionFactory twitterConnectionFactory = new TwitterConnectionFactory("eU42Gq3maCdL1Df0Kfw93bqmQ", 
			"7Vm3bJYZgRDXFPylNI5B9G5eO1YyTWug6fpTikRDpVZnLTYnDZ");
	OAuth1Operations oAuth1Operations = twitterConnectionFactory.getOAuthOperations();
	static final String TWITTER_CALLBACK_URL = "http://localhost:8080/SocialSignIn/TwitterLogin";
	
	static final String GOOGLE_CLIENT_ID = "570260973795-rh53ca0vt20qnbpva5aorebn8j0uk46r.apps.googleusercontent.com";
	static final String GOOGLE_CLIENT_SECRET = "8WY4TCtEZFErzpb3O8i9ejfU";
	static final String GOOGLE_CALLBACK_URL = "http://localhost:8080/SocialSignIn/GoogleLogin";
	GoogleConnectionFactory googleConnectionFactory = new GoogleConnectionFactory(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET);
	OAuth2Operations googleOAuth2Operations = googleConnectionFactory.getOAuthOperations();
	
	static final String LINKEDIN_CLIENT_ID = "81ojb5xmbokyga";
	static final String LINKEDIN_CLIENT_SECRET = "lfkCfspfb94DMCzt";
	static final String LINKEDIN_CALLBACK_URL = "http://localhost:8080/SocialSignIn/LinkedInLogin";
	LinkedInConnectionFactory linkedInConnectionFactory = new LinkedInConnectionFactory(LINKEDIN_CLIENT_ID, LINKEDIN_CLIENT_SECRET);
	OAuth2Operations linkedInOAuth2Operations = linkedInConnectionFactory.getOAuthOperations();
	
	@RequestMapping(value="/Home", method=RequestMethod.GET)
	public String home(HttpServletRequest request, HttpServletResponse response) throws IOException{
		return "page-home";
	}
	
	@RequestMapping(value={"/Login","/"}, method=RequestMethod.GET)
	public String login(HttpServletRequest request, HttpServletResponse response) throws IOException{
		return "page-login";
	}
	
	@RequestMapping(value={"/FacebookLogin"}, method=RequestMethod.POST)
	public String facebookLoginPost(HttpServletRequest request, HttpServletResponse response){
		return "page-login";
	}
	
	@RequestMapping(value={"/FacebookLogin"}, method=RequestMethod.GET)
	public String facebookLoginGet(HttpServletRequest request, HttpServletResponse response){
		return "page-login";
	}
	
	@RequestMapping(value={"/TwitterLogin"}, method=RequestMethod.POST)
	public String twitterLoginPost(HttpServletRequest request, HttpServletResponse response){
		OAuth1Parameters oAuth1Parameters = new OAuth1Parameters();
		oAuth1Parameters.setCallbackUrl(TWITTER_CALLBACK_URL);
		OAuthToken oAuthToken = oAuth1Operations.fetchRequestToken(TWITTER_CALLBACK_URL, null);
		String authorizeUrl = oAuth1Operations.buildAuthorizeUrl(oAuthToken.getValue(), oAuth1Parameters);
		return "redirect:" + authorizeUrl;
	}
	
	@RequestMapping(value={"/TwitterLogin"}, method=RequestMethod.GET)
	public String twitterLoginGet(HttpServletRequest request, HttpServletResponse response){
		String oAuthToken = request.getParameter("oauth_token");
		String oAuthVerifier = request.getParameter("oauth_verifier");
		if(oAuthToken == null || oAuthToken.isEmpty() || 
				oAuthVerifier == null || oAuthVerifier.isEmpty()){
			return "redirect:/Login";
		}
		OAuthToken requestToken = new OAuthToken(oAuthToken, "");
		OAuthToken accessToken = oAuth1Operations.exchangeForAccessToken(
				new AuthorizedRequestToken(requestToken, oAuthVerifier), 
				null);
		Connection<Twitter> connection = twitterConnectionFactory.createConnection(accessToken);
		if(connection == null){
			return "redirect:/Login";
		}
		TwitterProfile twitterProfile = connection.getApi().userOperations().getUserProfile();
		System.out.println(twitterProfile.getName());
		User user = new User();
		user.setUsername(String.valueOf(twitterProfile.getId()));
		user.setRole("ROLE_USER");
		List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
		authorities.add(new SimpleGrantedAuthority(user.getRole()));
		Authentication authentication = new UsernamePasswordAuthenticationToken(
				user.getUsername(), user.getPassword(), authorities);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		return "redirect:/Home";
	}
	
	@RequestMapping(value={"/GoogleLogin"}, method=RequestMethod.POST)
	public String googleLoginPost(HttpServletRequest request, HttpServletResponse response){
		OAuth2Parameters params = new OAuth2Parameters();
		params.setScope("profile");
		params.setRedirectUri(GOOGLE_CALLBACK_URL);
		String authoriseUrl = googleOAuth2Operations.buildAuthorizeUrl(params);
		return "redirect:" + authoriseUrl;
	}
	
	@RequestMapping(value={"/GoogleLogin"}, method=RequestMethod.GET)
	public String googleLoginGet(HttpServletRequest request, HttpServletResponse response){
		String code = request.getParameter("code");
		if(code == null || code.isEmpty()){
			return "redirect:/Login";
		}
		AccessGrant accessGrant = googleOAuth2Operations.exchangeForAccess(code, GOOGLE_CALLBACK_URL, null);
		Connection<Google> connection = googleConnectionFactory.createConnection(accessGrant);
		if(connection == null){
			return "redirect:/Login";
		}
		Person person = connection.getApi().plusOperations().getGoogleProfile();
		System.out.println(person.getDisplayName());
		User user = new User();
		user.setUsername(person.getId());
		user.setRole("ROLE_USER");
		List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
		authorities.add(new SimpleGrantedAuthority(user.getRole()));
		Authentication authentication = new UsernamePasswordAuthenticationToken(
				user.getUsername(), user.getPassword(), authorities);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		return "redirect:/Home";
	}
	
	@RequestMapping(value={"/LinkedInLogin"}, method=RequestMethod.POST)
	public String LinkedInLoginPost(HttpServletRequest request, HttpServletResponse response){
		OAuth2Parameters params = new OAuth2Parameters();
		params.setRedirectUri(LINKEDIN_CALLBACK_URL);
		params.set("state", "asasa2121ddsdsd");
		String authoriseUrl = linkedInOAuth2Operations.buildAuthorizeUrl(params);
		return "redirect:" + authoriseUrl;
	}
	
	@RequestMapping(value={"/LinkedInLogin"}, method=RequestMethod.GET)
	public String LinkedInLoginGet(HttpServletRequest request, HttpServletResponse response){
		String code = request.getParameter("code");
		if(code == null || code.isEmpty()){
			return "redirect:/Login";
		}
		AccessGrant accessGrant = linkedInOAuth2Operations.exchangeForAccess(code, LINKEDIN_CALLBACK_URL, null);
		Connection<LinkedIn> connection = linkedInConnectionFactory.createConnection(accessGrant);
		if(connection == null){
			return "redirect:/Login";
		}
		LinkedInProfile profile = connection.getApi().profileOperations().getUserProfile();
		System.out.println(profile.getFirstName());
		User user = new User();
		user.setUsername(profile.getId());
		user.setRole("ROLE_USER");
		List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
		authorities.add(new SimpleGrantedAuthority(user.getRole()));
		Authentication authentication = new UsernamePasswordAuthenticationToken(
				user.getUsername(), user.getPassword(), authorities);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		return "redirect:/Home";
	}
	
}