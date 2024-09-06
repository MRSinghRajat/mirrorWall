import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: '88a64694fa7b4c9d9004a6ed1aa110ed'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '2a52f6d259684c91b80239738e94b388'
                    }
                }
            }
        }
    }
}
