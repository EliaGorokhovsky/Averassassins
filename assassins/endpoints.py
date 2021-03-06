from django.conf.urls import include, url
from rest_framework import routers

from .api import AssassinViewSet, RegistrationAPI, LoginAPI, UserAPI, KillAPI

router = routers.DefaultRouter()
router.register('notes', AssassinViewSet)

urlpatterns = [
    url("", include(router.urls)),
    url("game/kill/$", KillAPI.as_view()),
    url("auth/register/$", RegistrationAPI.as_view()),
    url("auth/login/$", LoginAPI.as_view()),
    url("auth/user/$", UserAPI.as_view())
]