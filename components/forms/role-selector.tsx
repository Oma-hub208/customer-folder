type Role = {
  value: string;
  label: string;
};

type RoleSelectorProps = {
  roles: Role[];
  value: string;
  onChange: (value: string) => void;
};

export function RoleSelector({
  roles,
  value,
  onChange,
}: RoleSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {roles.map((role) => {
        const active = value === role.value;

        return (
          <button
            key={role.value}
            type="button"
            onClick={() => onChange(role.value)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              active
                ? "border-[#FC6710] bg-[#FC6710] text-white"
                : "border-gray-300 bg-white text-gray-700"
            }`}
          >
            {role.label}
          </button>
        );
      })}
    </div>
  );
}