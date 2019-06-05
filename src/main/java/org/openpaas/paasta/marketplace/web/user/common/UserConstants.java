package org.openpaas.paasta.marketplace.web.user.common;

/**
 * Constants 클래스
 *
 * @author peter
 * @version 1.0
 * @since 2019.06.03
 */
public class UserConstants {

    // common
    public static final String RESULT_STATUS_SUCCESS = "SUCCESS";
    public static final String RESULT_STATUS_FAIL = "FAIL";

    public static final String AUTHORIZATION_HEADER_KEY = "Authorization";
    public static final String CF_AUTHORIZATION_HEADER_KEY = "cf-Authorization";
    public static final String CONTENT_TYPE = "Content-Type";

    public static final String TARGET_API_CF = "cfApi";
    public static final String TARGET_API_MARKET = "marketApi";

//    public static final String MARKET_BASE_URL = "/";
    public static final String MARKET_INIT_URL = "/market";

    // general data
    public static final String GROUP_CODE_BUSINESS_TYPE = "BUSINESS_TYPE";

    public static final String URI_DB_CUSTOM_CODE_LIST = "/db/customCode/{groupCode}";
    public static final String URI_DB_CATEGORY_LIST = "/db/category/list";
    public static final String URI_DB_CATEGORY_DETAIL = "/db/category/detail/{id}";
    public static final String URI_DB_PRODUCT_LIST = "/db/product/list";

    // cf api uri
    public static final String MARKET_USER_URL = "/user";

    // market api uri
    public static final String URI_API_BASE = "/api";
    public static final String URI_API_CUSTOM_CODE = "/api/customCode";
    public static final String URI_API_CATEGORY = "/api/category";
    public static final String URI_API_SELLER_PROFILE = "/api/seller/profile";

    // market web user uri
    public static final String URI_INTRO_OVERVIEW = "/caas/intro/overview";
    public static final String URI_INTRO_ACCESS_INFO = "/caas/intro/accessInfo";

    public static final String URI_WORKLOAD_OVERVIEW = "/caas/workloads/overview";
    public static final String URI_WORKLOAD_DEPLOYMENTS = "/caas/workloads/deployments";
    public static final String URI_WORKLOAD_PODS = "/caas/workloads/pods";
    public static final String URI_WORKLOAD_REPLICA_SETS = "/caas/workloads/replicaSets";

    public static final String URI_SERVICES = "/caas/services";

    public static final String URI_USERS = "/caas/users";

    public static final String URI_ROLES = "/caas/roles";


    private UserConstants() {
        throw new IllegalStateException();
    }

}
