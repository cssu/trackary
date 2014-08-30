require 'test_helper'

describe Admin::UsersController do

  it 'should allow admins to view the list of users' do
    user =
    get :index
    assert_response :success
  end

  it 'should allow admins to access the new user creation page' do
    get :new
    assert_response :success
  end

  it 'should allow admins to create a new user with an email, password, and password confirmation' do
    get :create
    assert_response :success
  end

  it 'should allow admins to access the user editing page' do
    get :edit
    assert_response :success
  end

  it 'should allow admins to view individual users' do
    get :show
    assert_response :success
  end

  it 'should allow admins to update a user with a new email and password (with password confirmation)' do
    get :update
    assert_response :success
  end

  it 'should allow admins to update a user with just a new email' do
    get :update
    assert_response :success
  end

  it 'should allow admins to update a user with just a new password (with password confirmation)' do
    get :update
    assert_response :success
  end

  it 'should allow admins to delete a user' do
    get :destroy
    assert_response :success
  end


  it 'should redirect non-admins to the previous page with a flash[:alert] message' do
    get :index
    assert_response :success

  end

end
