require 'test_helper'

describe ProductsController do

  before do
    @product = products :kitkat
  end

  it 'should get index' do
    get :index
    assert_response :success
    assert_not_nil assigns(:products)
  end

  it 'should get new' do
    get :new
    assert_response :success
  end

  it 'should create product' do
    assert_difference('Product.count') do
      post :create, product: {
          name: @product.name,
          description: @product.description,
          price: @product.price,
          reward_points_cost: @product.reward_points_cost
      }
    end

    assert_redirected_to product_path(assigns(:product))
  end

  it 'should show product' do
    get :show, id: @product
    assert_response :success
  end

  it 'should get edit' do
    get :edit, id: @product
    assert_response :success
  end

  it 'should update product' do
    patch :update, id: @product, product: {
        name: @product.name,
        description: @product.description,
        price: @product.price,
        reward_points_cost: @product.reward_points_cost
    }
    assert_redirected_to product_path(assigns(:product))
  end

  it 'should destroy product' do
    assert_difference('Product.count', -1) do
      delete :destroy, id: @product
    end

    assert_redirected_to products_path
  end

end
