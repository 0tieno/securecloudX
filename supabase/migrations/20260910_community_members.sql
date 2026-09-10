create or replace function public.get_community_members()
returns table (
  member_id text,
  display_name text,
  avatar_url text
)
language sql
stable
security definer
set search_path = ''
as $$
  select
    identity.provider_id::text as member_id,
    left(coalesce(
      nullif(trim(identity.identity_data ->> 'full_name'), ''),
      nullif(trim(identity.identity_data ->> 'name'), ''),
      nullif(trim(identity.identity_data ->> 'user_name'), '')
    ), 100) as display_name,
    case
      when identity.identity_data ->> 'avatar_url' like 'https://avatars.githubusercontent.com/%'
      then identity.identity_data ->> 'avatar_url'
      else null
    end as avatar_url
  from auth.identities as identity
  inner join auth.users as registered_user on registered_user.id = identity.user_id
  where identity.provider = 'github'
    and registered_user.deleted_at is null
    and coalesce(
      nullif(trim(identity.identity_data ->> 'full_name'), ''),
      nullif(trim(identity.identity_data ->> 'name'), ''),
      nullif(trim(identity.identity_data ->> 'user_name'), '')
    ) is not null
  order by registered_user.created_at desc, identity.provider_id
  limit 24;
$$;

revoke all on function public.get_community_members() from public;
grant execute on function public.get_community_members() to anon, authenticated;