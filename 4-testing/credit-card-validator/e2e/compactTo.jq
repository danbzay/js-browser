[.[] | to_entries  | .[0] as { key: $nw, value: $nb} | $nb[] | [$nw,[B . | tostring]]
